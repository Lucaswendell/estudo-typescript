"use strict";
function review(userReview) {
    if (typeof userReview === 'boolean') {
        console.log("Sem review");
        return;
    }
    if (typeof userReview === 'number') {
        if (userReview > 5 || userReview < 1) {
            console.log('Review invalido');
            return;
        }
        console.log(`Review: ${"*".repeat(userReview)}`);
        return;
    }
}
review(false);
review(0);
review(1);
review(2);
review(3);
review(4);
review(5);
review(6);
