<script>
  import Header from "../components/Header.svelte";
  import Main from "../components/Main.svelte";
  import Timeline from "../components/TimeLine.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header />
<Main>
  <Timeline />
  <Sidebar />
</Main>
<Footer />

<style>
  :global(body) {
    background-color: #676778;
    color: white;
  }
</style>
