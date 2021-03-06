const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const store = {
    state: {
        ProfilePage: {
            postData: [
                {id: 1, message: 'Hi, mr_oroz', likeCount: 13},
                {id: 2, message: 'Hello World', likeCount: 25},
                {id: 3, message: 'blala', likeCount: 2},
                {id: 5, message: 'dada', likeCount: 0},
            ],
            newPost: 'it-camasutra-app',
        },
        MessagePage: {
            messegeData: [
                {id: 1, message: 'Hi, Marat'},
                {id: 2, message: 'Как дела?'},
                {id: 3, message: 'Все в порядке?'},
            ],
            dialogData: [
                {id: 1, name: 'Hasan', img: 'https://cdn.iconscout.com/icon/free/png-512/boy-avatar-4-1129037.png'},
                {
                    id: 2,
                    name: 'Asan',
                    img: 'https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png'
                },
                {
                    id: 3,
                    name: 'Uson',
                    img: 'https://e7.pngegg.com/pngimages/980/886/png-clipart-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head.png'
                },
                {
                    id: 4,
                    name: 'Marat',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXWa9ydmygQHdsadEm9yIjuLzBCdBqPGL0Q&usqp=CAU'
                },
                {
                    id: 5,
                    name: 'Diner',
                    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQuLB8WMVX3qR3A70Ho96IrQ32FrhnYLhfDg&usqp=CAU'
                },
                {id: 6, name: 'Medina', img: 'https://i.pinimg.com/736x/b8/62/46/b86246346098341fb8b7c854ea90ab8f.jpg'},
            ],
        },
    },
    getState() {
        return this.state
    },
    RenderEntireThree() {
        console.log('State')
    },
    subscribe(observer) {
        this.RenderEntireThree = observer //наблюдатель
    },
    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this.state.ProfilePage.newPost,
    //         likeCount: 0
    //     };
    //     this.state.ProfilePage.postData.push(newPost);
    //     this.state.ProfilePage.newPost = '';
    //     this.RenderEntireThree(this.state);
    // },
    // updateNewPostText(newText) {
    //     this.state.ProfilePage.newPost = newText
    //     this.RenderEntireThree(this.state)
    // },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {
                id: 5,
                message: this.state.ProfilePage.newPost,
                likeCount: 0
            };
            this.state.ProfilePage.postData.push(newPost);
            this.state.ProfilePage.newPost = '';
            this.RenderEntireThree(this.state);
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this.state.ProfilePage.newPost = action.newText
            this.RenderEntireThree(this.state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default store;