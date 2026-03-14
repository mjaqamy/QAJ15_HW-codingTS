// import { rollCube } from '../../task1-kube';
// import { expect } from 'chai';

// describe('test Cube', () => {
//   let i = 0;
//   beforeEach(()=>{
//     i++;
//     console.log(`this is test # ${i}`);
//   })
//   after(()=>{
//     console.log(`total # ${i}`);
//   })
//   it('min input value', function () {
//     const roll = rollCube(2);
//     if (!(roll === 1 || roll === 2)) {
//       throw Error(`Invalid value: resived ${roll}`);
//     }
//   });
//   it('max input value', function () {
//     const roll = rollCube(100);
//     expect(roll).to.be.within(1,3,'бросок кубика должен быть в диапазоне от 1 до 100');
//   });
//   describe('invalid value', () => {
//     it('invalid input value', function () {
//       expect([1,2,3]).to.deep.equal([5,2,3]);
//     });
//   });
// });
