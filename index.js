const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPost(){

    const oAuthorSection = document.getElementById('idAuthorSection');
    const oImageSection = document.getElementById('idImageSection');
    const oPostUser = document.getElementById('idPostUser');
    
    for(let i=0; i < posts.length; i++){

        localStorage.setItem("LikesPostNo"+ i, posts[i].likes);

        let sAuthorSection = `<section id="idAuthorSection${i}" class="authorSection">
                                    <img id="idAuthorProf${i}" src="${posts[i].avatar}" class="authorProfile"></img>
                                    <div class="authorDetails">
                                        <h1 id="idFullName${i}" class="fullName">${posts[i].name}</h1>
                                        <h2 id="idLocation${i}" class="location">${posts[i].location}</h2>
                                    </div>
                                </section>`


        let sImageSection = `<section id="idImageSection0" class="imageSec">
                                    <img id="idPostImage${i}" src="${posts[i].post}" 
                                    class="post-image" 
                                    alt="An image of ${posts[i].name} post"></img>
                                </section>`

        //let sLikes = renderLikes(i)
        let sPostUserBody = `<section id="idPostBody${i}" class="post-body">
                                <div class="post-icons">
                                    <img id="idPostBody${i}" onclick="saveLikes(${i})" class="icon-heart" 
                                    src="images/icon-heart.png" alt="An icon image of heart for likes">
                                    <img id="idPostBody${i}" class="icon-comment" 
                                    src="images/icon-comment.png" alt="An icon image of comment">
                                    <img id="idPostBody${i}" class="icon-share" 
                                    src="images/icon-dm.png" alt="An icon image of direct message">
                                </div>
                            </section>
                            <section id="idLikesSection${i}" class="post-likes">
                                <p id="idLikes${i}" class="likes-count">${localStorage.getItem("LikesPostNo"+i)} likes</p>
                                <p id="idCaption${i}" class="caption"><span id="idUserName${i}" class="username">${posts[i].username}</span>
                                ${posts[i].comment}</p>
                            </section>`

        const oMainContainer = document.getElementById('idContainer');
        oMainContainer.innerHTML += sAuthorSection + sImageSection + sPostUserBody;
    }
}

renderPost()

function saveLikes(i){
    
    let sLikes = JSON.parse(localStorage.getItem("LikesPostNo"+i)) 
    localStorage.setItem("LikesPostNo"+ i, sLikes+1);

    const oLikesEl = document.getElementById("idLikes"+i)
    oLikesEl.textContent = localStorage.getItem("LikesPostNo"+i) + ' likes'
    
}

function renderLikes(i){
    return `<p id="idLikes${i}" class="likes-count">${localStorage.getItem("LikesPostNo"+i)} likes</p>`
}