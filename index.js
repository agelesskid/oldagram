const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./images/avatar-vangogh.jpg",
        avatarAlt: "Confused redhead guy",
        post: "./images/post-vangogh.jpg",
        postAlt: "Redhead guy painting",
        comment: "Just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./images/avatar-courbet.jpg",
        avatarAlt: "Young, handsome long-haired guy with mustache and big beard",
        post: "./images/post-courbet.jpg",
        postAlt: "Confused long-haired guy with mustache and beard painting",
        comment: "I'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./images/avatar-ducreux.jpg",
        avatarAlt: "Grey-haired guy with finger close to his lips",
        post: "./images/post-ducreux.jpg",
        postAlt: "Smiling grey-haired guy pointing on you painting",
        comment: "Gm friends! Which coin are YOU stacking up today?? Post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main")


function generatePosts(arr) {
    let posts = ''

    for (let i = 0; i < arr.length; i++) {
        posts += `
            <section class="card">
                <div class="card__header">
                    <a href="#"><img class="card__header__user-avatar" src="${arr[i].avatar}" alt="${arr[i].avatarAlt}"></a>
                    <div class="card__header__text-container">
                        <a href="#"><p class="card__header__text-container__username">${arr[i].name}</p></a>
                        <a href="#"><p class="card__header__text-container__location">${arr[i].location}</p></a>
                    </div>
                </div>
                <div class="card__content">
                    <img src="${arr[i].post}" alt="${arr[i].postAlt}">
                </div>
                <div class="card__footer">
                    <ul class="list card__footer__buttons-list">
                        <li class="card__footer__buttons-list__el">
                            <button type="button"><img src="./images/icon-heart.png" alt="Like button"></button>
                        </li>
                        <li class="card__footer__buttons-list__el">
                            <button type="button"><img src="./images/icon-comment.png" alt="Comment button"></button>
                        </li>
                        <li class="card__footer__buttons-list__el">
                            <button type="button"><img src="./images/icon-dm.png" alt="DM button"></button>
                        </li>
                    </ul>
                    <p class="card__footer__likes">${arr[i].likes} likes</p>
                    <div class="card__footer__desc">
                        <a class="card__footer__desc__username" href="#">${arr[i].username}</a>
                        <p class="card__footer__desc__content">${arr[i].comment}</p>
                    </div>
                </div>
            </section>
        `
    }

    return posts
}

mainEl.innerHTML = generatePosts(posts)
