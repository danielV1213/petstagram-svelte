<script>
  export let comments = [];

  function addComment(event) {
    const msg = event.target.text.value;
    if (msg.length > 3) {
      const message = {
        id: Date.now(),
        text: msg,
        username: "daniel2.jsx",
      };
      comments = [...comments, message];
      event.target.text.value = "";
    }
  }
</script>

<div class="comments">
  <div class="comments-content">
    {#each comments as comment (comment.id)}
      <div class="comments-users">
        <h3>{comment.username}</h3>
        <span>{comment.text}</span>
      </div>
    {/each}
    <div class="comments-add">
      <form on:submit|preventDefault={addComment}>
        <input
          type="text"
          class="comments-input"
          placeholder="Agregar comentario"
          id="text"
        />
        <button type="submit">Post</button>
      </form>
    </div>
  </div>
</div>

<style>
  .comments h3 {
    font-size: 14px;
    color: black;
    font-weight: bold;
    margin: 0;
    padding: 0;
  }
  .comments span {
    font-size: 14px;
    margin: 0 0 0 0.5em;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.9);
  }
  .comments-add {
    padding: 1em;
    border-top: 1px solid rgba(219, 219, 219, 0.8);
  }
  .comments-add form {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .comments-content {
    padding: 0 1em 0.5em 1em;
  }
  .comments-users {
    margin: 0 0 0.5em 0;
    display: flex;
  }
  .comments-input {
    border: solid 1px #e9e9e9;
    border-radius: 5px;
    color: #696969;
    border: 1px solid transparent;
    font-size: 12px;
    outline: none;
    width: 100%;
    display: flex;
  }
  button {
    border: none;
    color: #3897f0;
    font-size: 12px;
    font-weight: 700;
    outline: none;
    background: none;
    cursor: pointer;
  }
  label {
    display: none;
  }
</style>
