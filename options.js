// options.js

document.addEventListener('DOMContentLoaded', function() {
    let saveButton = document.getElementById('saveButton');
    let commentInput = document.getElementById('commentInput');

    saveButton.addEventListener('click', function() {
        let comment = commentInput.value;
        saveComment(comment);
    });
});

function saveComment(comment) {
    chrome.storage.sync.set({ 'comment': comment }, function() {
        console.log('Comment saved');
    });
}

function loadComments() {
    chrome.storage.sync.get('comment', function(data) {
        displayComments(data.comment);
    });
}

function displayComments(comment) {
    let commentList = document.getElementById('commentList');
    commentList.innerHTML = comment;
}