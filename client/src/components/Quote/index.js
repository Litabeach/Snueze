import React from 'react';
import {Form} from 'react-bootstrap';

function quote () {
  const sleepQuotes = [
    "There is no sunrise so beautiful that it is worth waking me up to see it. — Mindy Kaling, Is Everybody Hanging Without Me?",
    "I think sleeping was my problem in school. If school had started at four in the afternoon, I'd be a college graduate today. — George Foreman, Former Professional Boxer",
    "Laugh and the world laughs with you, snore and you sleep alone. — Anthony Burgess, Inside Mr. Enderby",
    "I don't feel old. I don't feel anything till noon. That's when it's time for my nap. — Bob Hope, British-American Comedian",
    "Never go to bed mad. Stay up and fight. — Phyllis Diller, Phyllis Diller's Housekeeping Hints",
    "I think it is good that books still exist, but they do make me sleepy. — Frank Zappa, The Real Frank Zappa Book",
    "If you're going to do something tonight that you'll be sorry for tomorrow morning, sleep late. — Henny Youngman, English-American Comedian",
    "When the going gets tough, the tough take a nap. — Tom Hodgkinson, British Writer",
    "I'm so good at sleeping that I can do it with my eyes closed. — Anonymous",
    "Early to rise, early to bed, makes a man healthy, wealthy, and dead. — James Thurber, American Cartoonist",
    "No wonder Sleeping Beauty looked so good…she took long naps, never got old, and didn't have to do anything but snore to get her Prince Charming. — Olive Green, Author",
    "Dear sleep, I'm sorry we broke up this morning. I want you back! — Anonymous",
    "I love to sleep. Do you? Isn't it great? It really is the best of both worlds. You get to be alive and unconscious. — Rita Rudner, American Comedian",
    "Your eyes water when you yawn because you miss your bed and it makes you sad. — Anonymous",
    "My mother told me to follow my dreams, so I took a nap. — Unknown",
    "Happiness is waking up, looking at the clock and finding that you still have two hours left to sleep. — Charles M. Schulz, American Cartoonist",
    "No civilized person goes to bed the same day he gets up. — Richard Harding Davis, American Journalist",
    "I always say ‘morning' instead of ‘good morning,' because if it was a good morning, I'd still be asleep. — Anonymous",
    "Don't give up on your dreams so soon, sleep longer. — Anonymous",
    "A day without a nap is like a cupcake without frosting. — Terri Guillemets, Quotation Anthologist",
    "I love sleep. My life has the tendency to fall apart when I'm awake, you know? — Ernest Hemingway, American Author",
    "Sleep is like a cat: It only comes to you if you ignore it. -— Gillian Flynn, Gone Girl",
  ]

 var counter = 0;

  function randomize () {
    var randomNumber = Math.floor(Math.random() * sleepQuotes.length);
    return randomNumber;
  }

  function change() {
    var quote = sleepQuotes[randomize()];
    
    counter++;
    if (counter >= sleepQuotes.length) {
      counter = 0;
      //clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
    } 
    return quote;
  }


    return (
        <Form.Text id="quoteDisplay1" className="quoteDisplay">
            {change(quote)}
        </Form.Text>
    )
}
export default quote;


// <Form.Label id="quoteDisplay2" className="quoteDisplay">
// "No day is so bad it can't be fixed with a nap. — Carrie Snow, American Stand-Up Comic"
// </Form.Label>
// <Form.Label id="quoteDisplay3" className="quoteDisplay">
// "I don't need a hairstylist, my pillow gives me a new hairstyle every morning. — Unknown"
// </Form.Label>
// <Form.Label id="quoteDisplay4" className="quoteDisplay">
// "I already want to take a nap tomorrow. — Anonymous"
// </Form.Label>