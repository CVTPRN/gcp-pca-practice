import test from 'node:test';
import assert from 'node:assert/strict';
import {QUESTIONS,TOPICS,REFERENCE,FACTS} from '../web/bank.mjs';
test('question bank has valid single and multiple response cases in all six domains',()=>{
 assert.equal(TOPICS.length,6);assert.ok(QUESTIONS.length>=60);assert.equal(new Set(QUESTIONS.map(q=>q.id)).size,QUESTIONS.length);
 for(const t of TOPICS)assert.ok(QUESTIONS.filter(q=>q.topic===t.id).length>=8,t.id);
 for(const q of QUESTIONS){assert.ok(q.prompt.length>25,q.id);assert.equal(q.options.length,4,q.id);assert.equal(new Set(q.options).size,4,q.id);assert.ok(q.answer.length>=1&&q.answer.length<=2,q.id);assert.equal(new Set(q.answer).size,q.answer.length,q.id);assert.ok(q.answer.every(i=>i>=0&&i<4),q.id);assert.ok(q.explanation.length>20,q.id);assert.ok(q.source.startsWith('https://docs.cloud.google.com/'),q.id);}
 assert.ok(QUESTIONS.filter(q=>q.answer.length===2).length>=5);
 assert.ok(QUESTIONS.filter(q=>q.caseStudy).length/QUESTIONS.length>=.2);
});
test('reference has unique short forms and official sources',()=>{
 const entries=REFERENCE.flatMap(g=>g.items);assert.ok(entries.length>=50);assert.equal(new Set(entries.map(x=>x[0])).size,entries.length);
 for(const g of REFERENCE)assert.ok(g.source.startsWith('https://'));
 for(const f of FACTS)assert.ok(f.source.startsWith('https://')&&f.value&&f.note);
});
