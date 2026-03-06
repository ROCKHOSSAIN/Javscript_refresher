//4th method
//কোডটি হলো JavaScript-এর Explicit Binding-এর একটি উদাহরণ
const person1={
    fullname:function(){
        return this.firstname+ " "+this.lastname;
    }
}
const person2={
    firstname:"rock",
    lastname:"hossain",
}
console.log(person1.fullname.call(person2));
//ekhane this bolte person2 ke alada vabe bole dicche etar jnno explicit 

/**
 * ব্যাখ্যা:
 * ১. এখানে fullname ফাংশনটি person1 এর ভেতরে আছে।
 * ২. কিন্তু person1 এর নিজস্ব কোনো firstname বা lastname নেই।
 * ৩. .call(person2) ব্যবহারের মাধ্যমে আমরা বলে দিচ্ছি যে— 
 * "fullname ফাংশনটি চালাও, কিন্তু ওই ফাংশনের ভেতরে 'this' হিসেবে person2 অবজেক্টকে ব্যবহার করো।"
 */