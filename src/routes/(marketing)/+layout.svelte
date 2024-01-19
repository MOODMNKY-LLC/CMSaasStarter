<script>
  import "../../app.css"
</script>

<div class="navbar bg-base-100 container mx-auto text-gray-300">
  <!-- Adjusted to text-gray-300 -->
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl text-white" href="/"
      >MOOD MNKY</a
    >
    <!-- Adjusted to text-white -->
  </div>
  <div class="flex-none">
    <ul
      class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg text-gray-300"
    >
      <!-- Adjusted to text-gray-300 -->
      <li class="md:mx-4">
        <a
          href="https://github.com/MOODMNKY-LLC"
          class="border border-primary text-white"
        >
          <!-- Adjusted to text-white -->
          ★ us on Github
        </a>
      </li>
      <li class="md:mx-2"><a href="/blog" class="text-white">Blog</a></li>
      <!-- Adjusted to text-white -->
      <li class="md:mx-2"><a href="/pricing" class="text-white">Pricing</a></li>
      <!-- Adjusted to text-white -->
      <li class="md:mx-2"><a href="/account" class="text-white">Account</a></li>
      <!-- Adjusted to text-white -->
    </ul>
    <!-- ... Dropdown Content ... -->
  </div>
</div>

<div class="">
  <slot />
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="flex-grow"></div>

<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base text-gray-300"
  >
    <!-- Adjusted to text-gray-300 -->
    <nav>
      <span class="footer-title opacity-80 text-white">Explore</span>
      <!-- Adjusted to text-white -->
      <a class="link link-hover mb-1 text-white" href="/">Overview</a>
      <!-- Adjusted to text-white -->
      <a class="link link-hover my-1 text-white" href="/pricing">Pricing</a>
      <!-- Adjusted to text-white -->
      <a class="link link-hover my-1 text-white" href="/blog">Blog</a>
      <!-- Adjusted to text-white -->
      <a
        class="link link-hover my-1 text-white"
        href="https://github.com/MOODMNKY-LLC">Github</a
      >
      <!-- Adjusted to text-white -->
    </nav>
    <aside>
      <span class="footer-title opacity-80 text-white">Sponsor</span>
      <!-- Adjusted to text-white -->
      <!-- ... Sponsor Content ... -->
    </aside>
  </footer>
</div>
