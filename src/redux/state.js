let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It\'s my first post!', likesCount: 10},

        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sasha'}
        ],

        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'}

        ]
    },
    friendsList: {
        friends: [
            {name: 'Dima'},
            {name: 'Andrew'},
            {name: 'Sasha'},

        ]
    },

}

export let addPost = (postMessage) =>{
    let newPost = {
        id:5,
        message:postMessage,
        likesCount:0
    };

    state.profilePage.posts.push(newPost);
}
export default state;