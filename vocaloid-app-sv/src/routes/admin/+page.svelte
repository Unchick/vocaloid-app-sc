
<!--<script lang="ts">-->
<!--    export let data;-->

<!--    const albums = data.albums;-->
<!--</script>-->

<!--<h1>Admin Dashboard</h1>-->

<!--<a href="/admin/new">-->
<!--    <button>Add New Album</button>-->
<!--</a>-->

<!--<a href="/">-->
<!--    <button>Back to Main Page</button>-->
<!--</a>-->

<!--<ul>-->
<!--    {#each albums as album}-->
<!--        <li>-->
<!--            <strong>{album.name}</strong> by {album.artist}-->
<!--            <form method="POST" action="?/delete">-->
<!--                <input type="hidden" name="id" value={album.id} />-->
<!--                <button type="submit">Delete</button>-->
<!--            </form>-->
<!--            <a href={`/admin/edit/${album.id}`}>Edit</a>-->
<!--        </li>-->
<!--    {/each}-->

<!--</ul>-->


<script lang="ts">
    export let data;
    const albums = data.albums;
</script>

<div class="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>

    <div class="flex gap-4 mb-6">
        <a href="/admin/new">
            <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                ➕ Add New Album
            </button>
        </a>
        <a href="/">
            <button class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition">
                ← Back to Main Page
            </button>
        </a>
    </div>

    <ul class="space-y-4">
        {#each albums as album}
            <li class="flex gap-4 p-4 bg-white rounded shadow border items-center">
                <img
                        src={album.cover_url || '/placeholder.png'}
                        alt={album.name}
                        class="w-24 h-24 object-cover rounded border"
                />

                <div class="flex-1">
                    <p class="text-lg font-semibold text-gray-900">
                        {album.name} <span class="text-gray-600 font-normal">by {album.artist}</span>
                    </p>
                    <div class="mt-2 flex gap-4">
                        <form method="POST" action="?/delete">
                            <input type="hidden" name="id" value={album.id} />
                            <button type="submit" class="text-red-600 hover:underline">🗑 Delete</button>
                        </form>
                        <a href={`/admin/edit/${album.id}`} class="text-blue-600 hover:underline">✏️ Edit</a>
                    </div>
                </div>
            </li>
        {/each}
    </ul>
</div>

