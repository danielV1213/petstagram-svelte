<script>
  import profilePicture from "../assets/cloe-profile.jpeg";
  import Comments from "./Comments.svelte";

  export let post;
</script>

<div class="card">
  <div class="card-container">
    <div class="card-header">
      <div class="card-user">
        <img src={post.avatar} alt="profile-img" />
        <h2>{post.username} <span>{post.location}</span></h2>
      </div>
      <div class="card-settings">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="card-photo">
      <figure>
        <img src={post.photo} alt="post-img" />
      </figure>
    </div>
    <div class="card-icons">
      <div class="card-icons-first">
        <i class="fas fa-heart"></i>
        <i class="fas fa-paper-plane"></i>
      </div>
      <div class="card-icons-second">
        <i class="fas fa-bookmark"></i>
      </div>
    </div>
    <div class="card-description">
      <h3>{post.postComment}</h3>
    </div>
    <Comments comments={post.comments} />
  </div>
</div>

<style>
  .card {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
  }
  .card-user {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .card-user img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .card-user h2 {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 600;
    margin: 0 0 0 1em;
    color: black;
  }
  .card-user h2 span {
    display: block;
    font-size: 12px;
    font-weight: normal;
    color: rgba(38, 38, 38, 0.7);
  }
  .card-photo {
    padding: 0;
    margin: 0;
  }
  .card-photo img {
    width: 100%;
    height: auto;
  }
  .card-photo figure {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .card-settings i {
    cursor: pointer;
  }
  .card-icons {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-icons i {
    margin: 0 1em 0 0;
    cursor: pointer;
    font-size: 20px;
  }
  .card-icons i:last-child {
    margin: 0;
  }
  .card-description {
    padding: 0 1em 1em 1em;
  }
  .card-description h3 {
    font-size: 14px;
    font-weight: bold;
    color: black;
  }
  .card-description span {
    font-size: 14px;
  }
  .active-like {
    color: #bc1888;
    animation: bounce linear 0.8s;
    animation-iteration-count: 1;
    transform-origin: 20% 20%;
  }
  .active-bookmark {
    color: #f09433;
  }

  @keyframes bounce {
    0% {
      transform: translate(0px, 0px);
    }
    15% {
      transform: translate(0px, -25px);
    }
    30% {
      transform: translate(0px, 0px);
    }
    45% {
      transform: translate(0px, -15px);
    }
    60% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(0px, -5px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
</style>
