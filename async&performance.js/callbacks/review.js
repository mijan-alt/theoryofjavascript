/**callback is the heart of aynchronous javacript. the problems is that callbacks works in non-linear, non-sequenital
 * ways which makes our brain hurt. the human brain thinks in a linear fashion so it is difficult to 
 * get our heads around callbacks because of its non-linear routes. Therefore , we need a way to implement
 * asychronous javascript in a way that is synchronous. we will look into that shortly.
 * 
 * callbacks are also at mercy of whatever third party utility, which is supposed to invoke the callback. This 
 * is a problem because if there is a bug in that utility, it might lead to unexpected result. whenever ever
 * we pass in a callback into a third party utility, we call that inversion of control.
 */