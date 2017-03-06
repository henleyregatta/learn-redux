//increment comments
export increment(index) {
  return {    
    type:"INCREMENT_LIKES",
    index
  }

} 

//add comment
export addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }
}

//remove comment
export function (postId, i) {
  return {
    type: "REMOVE_COMMENT"
    postId,
    i
  }
}