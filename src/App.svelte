<script>
  import io from 'socket.io-client'

  const socket = io("http://localhost:3000")

  let messages = []
  let message = ''

  socket.on('chat message', (data) => {
    messages = [...messages, data]
  })

  function sendMessage() {
    socket.emit('chat message', message)
    message = ''
  }
</script>

<main>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col w-5/12 bg-slate-900 px-8 py-8 rounded-lg">
      <h1 class="mb-4 font-bold text-gray-50 text-4xl text-center">Chat Application</h1>
      <div class="w-full mb-4 bg-gray-300 rounded-md px-4 py-4">
        {#each messages as message}
          <div class="px-4 py-2 mb-2 bg-pink-700 rounded-md font-semibold text-gray-50 w-fit">{message}</div>
        {/each}
      </div>
      <div class="w-full flex">
        <input bind:value={message} class="rounded-md px-2 py-2 w-full border-0" placeholder="Message..." type="text">
        <button on:click={sendMessage} class="rounded-md px-3 py-2 bg-pink-700 text-gray-50 border-0 ml-2">Send</button>
      </div>
    </div>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>