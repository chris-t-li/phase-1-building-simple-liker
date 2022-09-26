// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡' // HHEX: &#x2661
const FULL_HEART = '♥' // HEX: &#x2665

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const likeBtn = document.querySelectorAll('span.like-glyph')
  likeBtn.forEach(item => {
    item.addEventListener('click', e => {

      mimicServerCall()
        .then(() => {
          if (e.target.textContent === EMPTY_HEART) {
            e.target.textContent = FULL_HEART;
            e.target.className = "activated-heart";
          } else if (e.target.textContent === FULL_HEART) {
            e.target.textContent = EMPTY_HEART;
            e.target.className = "";
          }
        })
        .catch(err => {
          document.getElementById('modal').className = "";
          document.getElementById('modal-message').textContent = err;
          setTimeout(hideModal, 3000);
          console.error(err)
        })
        function hideModal() {
          document.getElementById('modal').className = "hidden";
        }
    })
  })
})
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
