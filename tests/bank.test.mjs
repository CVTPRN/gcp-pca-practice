import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS,TOPICS,REFERENCE,FACTS,CASE_STUDIES,EXAM_DOMAIN_COUNTS,selectExamIds} from '../web/bank.mjs';
test('question bank has valid single and multiple response cases in all six domains',()=>{
 assert.equal(TOPICS.length,6);assert.equal(QUESTIONS.length,263);assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length);assert.equal(new Set(QUESTIONS.map(q=>q.prompt)).size,QUESTIONS.length);
 for(const t of TOPICS)assert.ok(QUESTIONS.filter(q=>q.topic===t.id).length>=16,t.id);
 for(const q of QUESTIONS){assert.ok(q.prompt.length>25,q.id);assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);assert.ok(q.answer.length>=1&&q.answer.length<=2,q.id);assert.equal(new Set(q.answer).size,q.answer.length,q.id);assert.ok(q.answer.every(i=>i>=0&&i<4),q.id);assert.ok(q.explanation.length>20,q.id);assert.ok(q.source.startsWith('https://docs.cloud.google.com/'),q.id);assert.doesNotMatch([q.prompt,...q.options,q.explanation].join(' '),/[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/,q.id);}
 for(const q of QUESTIONS.slice(65))assert.ok(q.research?.startsWith('https://'),q.id);
 assert.equal(QUESTIONS.filter(q=>q.caseStudy).length,57);
 assert.ok(QUESTIONS.filter(q=>q.answer.length===2).length>=45);
 for(const c of CASE_STUDIES)assert.ok(QUESTIONS.filter(q=>q.caseName===c.name).length>=8,c.name);
 assert.deepEqual(QUESTIONS[0].answer,[1]); // Historical answer index for browser backup compatibility.
 assert.ok(QUESTIONS.filter(q=>q.answer.length===2).length>=5);
 assert.ok(QUESTIONS.filter(q=>q.caseStudy).length/QUESTIONS.length>=.2);
 for(let i=0;i<4;i++)assert.ok(QUESTIONS.filter(q=>q.answer.length===1&&q.answer[0]===i).length>=10,`correct option ${i}`);
});
test('exam simulations preserve the domain balance and draw two official cases',()=>{
 for(let i=0;i<100;i++){
  const ids=selectExamIds(),qs=ids.map(id=>QUESTIONS.find(q=>q.id===id));
  assert.equal(ids.length,50);assert.equal(new Set(ids).size,50);
  for(const [domain,count] of Object.entries(EXAM_DOMAIN_COUNTS))assert.equal(qs.filter(q=>q.topic===domain).length,count,domain);
  const caseQuestions=qs.filter(q=>q.caseName);
  assert.equal(caseQuestions.length,12);
  const names=new Set(caseQuestions.map(q=>q.caseName));assert.equal(names.size,2);
  for(const name of names)assert.equal(caseQuestions.filter(q=>q.caseName===name).length,6);
 }
});
test('reference has unique short forms and official sources',()=>{
 const entries=REFERENCE.flatMap(g=>g.items);assert.ok(entries.length>=50);assert.equal(new Set(entries.map(x=>x[0])).size,entries.length);
 for(const g of REFERENCE)assert.ok(g.source.startsWith('https://'));
 for(const f of FACTS)assert.ok(f.source.startsWith('https://')&&f.value&&f.note);
});

