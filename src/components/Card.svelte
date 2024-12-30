<script>
  import profilePicture from "../assets/daniel-img.jpg";
  import Comments from "./Comments.svelte";
</script>

<div class="card">
  <div class="card-container">
    <div class="card-header">
      <div class="card-user">
        <img src={profilePicture} alt="profile-img" />
        <h2>florencia.pug <span>Cali, Colombia</span></h2>
      </div>
      <div class="card-settings">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="card-photo">
      <figure>
        <img src={profilePicture} alt="profile-img" />
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
      <h3>florencia.pug</h3>
    </div>
  </div>
</div>
