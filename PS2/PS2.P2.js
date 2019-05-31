// a generator that is initialized with a sentence and that emits each word of the sentence in turn.

const sentence = "All I know is something like a bird within her sang";

function* wordPrint (sentence) {

    const list = sentence.split(' ');
    let item = -1;
    let listLength = list.length;
    while (listLength--) {
        item++;
        yield list[item];
    }

}

myWord = wordPrint(sentence);
let sent = myWord.next();
while (sent.done === false) {
    console.log(sent.value);
    sent = myWord.next();
}