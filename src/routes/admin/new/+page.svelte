<script lang="ts">
    export let form;

    let name = form?.values?.name || '';
    let artist = form?.values?.artist || '';
    let release_date = form?.values?.release_date || '';
    let cover_url = form?.values?.cover_url || '';
    let description = form?.values?.description || '';
    let errors = form?.errors || [];

    $: validCover = cover_url && cover_url.startsWith('http');
</script>

<div class="max-w-xl mx-auto p-6 bg-white shadow rounded">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Add New Album</h1>

    {#if errors.length}
        <ul class="mb-4 p-4 bg-red-100 text-red-800 rounded">
            {#each errors as e}
                <li>• {e}</li>
            {/each}
        </ul>
    {/if}

    <form method="POST" class="space-y-4">
        <div>
            <label for="name" class="block font-medium text-gray-700">Album Name</label>
            <input
                    id="name"
                    name="name"
                    bind:value={name}
                    required
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
        </div>

        <div>
            <label for="artist" class="block font-medium text-gray-700">Artist</label>
            <input
                    id="artist"
                    name="artist"
                    bind:value={artist}
                    required
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
        </div>

        <div>
            <label for="release_date" class="block font-medium text-gray-700">Release Date</label>
            <input
                    type="date"
                    id="release_date"
                    name="release_date"
                    bind:value={release_date}
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />
        </div>

        <div>
            <label for="cover_url" class="block font-medium text-gray-700">Cover URL</label>
            <input
                    id="cover_url"
                    name="cover_url"
                    bind:value={cover_url}
                    placeholder="https://example.com/image.jpg"
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            />

            {#if validCover}
                <img
                        src={cover_url}
                        alt="Cover Preview"
                        class="mt-3 w-48 h-48 object-cover rounded shadow border"
                        on:error={() => validCover = false}
                />
            {/if}
        </div>

        <div>
            <label for="description" class="block font-medium text-gray-700">Description</label>
            <textarea
                    id="description"
                    name="description"
                    bind:value={description}
                    rows="4"
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring focus:ring-blue-300"
            ></textarea>
        </div>

        <div class="flex justify-between items-center mt-6">
            <a href="/admin" class="text-gray-600 hover:underline">← Back to Admin</a>
            <button
                    type="submit"
                    class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Add Album
            </button>
        </div>
    </form>
</div>
