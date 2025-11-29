import { sumFun } from "../sum";

test(" sum function should add two numbers",() => {

    const result = sumFun(3,6);

    //Assertion => we always have a assertion without expect there is no test case but it is not manadatory to use expect
    expect(result).toBe(9);
    
})