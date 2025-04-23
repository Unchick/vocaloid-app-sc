

<!--<script lang="ts">-->
<!--    export let data;-->
<!--    const albums = data.albums;-->
<!--    const currentSort = data.sort;-->

<!--    let expandedDescription: Record<number, boolean> = {};-->
<!--</script>-->

<!--<div class="max-w-5xl mx-auto p-6">-->
<!--    <h1 class="text-4xl font-bold text-gray-800 mb-6">Vocaloid Albums</h1>-->

<!--    <a href="/admin">-->
<!--        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4">-->
<!--            Admin Dashboard-->
<!--        </button>-->
<!--    </a>-->

<!--    <form method="GET" class="my-4">-->
<!--        <label for="sort" class="font-medium mr-2">Sort by:</label>-->
<!--        <select-->
<!--                name="sort"-->
<!--                id="sort"-->
<!--                class="border border-gray-300 px-2 py-1 rounded"-->
<!--                on:change={() => event.target.form.submit()}-->
<!--        >-->
<!--            <option value="newest" selected={currentSort === 'newest'}>Newest first</option>-->
<!--            <option value="oldest" selected={currentSort === 'oldest'}>Oldest first</option>-->
<!--            <option value="name" selected={currentSort === 'name'}>Name (A–Z)</option>-->
<!--            <option value="artist" selected={currentSort === 'artist'}>Artist (A–Z)</option>-->
<!--        </select>-->
<!--    </form>-->

<!--    <ul class="space-y-6">-->
<!--        {#each albums as album}-->
<!--            <li class="bg-white shadow p-4 rounded-lg border flex items-start gap-4">-->
<!--                <img-->
<!--                        src={album.cover_url || "/placeholder.png"}-->
<!--                        alt={album.name}-->
<!--                        class="w-32 h-32 object-cover border rounded"-->
<!--                />-->

<!--                <div class="flex-1">-->
<!--                    <p class="text-xl font-semibold text-gray-900">{album.name}</p>-->
<!--                    <p class="text-gray-700 mb-2">by {album.artist}</p>-->

<!--                    {#if album.description}-->
<!--                        <button-->
<!--                                type="button"-->
<!--                                class="text-blue-600 text-sm mb-2 hover:underline"-->
<!--                                on:click={() => expandedDescription[album.id] = !expandedDescription[album.id]}-->
<!--                        >-->
<!--                            {expandedDescription[album.id] ? 'Hide' : 'Show'} Description-->
<!--                        </button>-->

<!--                        {#if expandedDescription[album.id]}-->
<!--                            <p class="text-gray-600 text-sm whitespace-pre-wrap break-all">-->
<!--                                {album.description}-->
<!--                            </p>-->
<!--                        {/if}-->
<!--                    {/if}-->
<!--                </div>-->
<!--            </li>-->
<!--        {/each}-->
<!--    </ul>-->
<!--</div>-->

<script lang="ts">
    export let data;
    const albums = data.albums;
    const currentSort = data.sort;

    let expandedDescription: Record<number, boolean> = {};
</script>

<div class="max-w-6xl mx-auto p-8 font-supply font-light text-gray-900">
    <h1 class="text-5xl font-bold mb-10 text-center tracking-widest uppercase">
        Vocaloid Albums
    </h1>

    <h1 class="text-3xl font-supply font-bold !font-supply !text-red-600">
        FORCE: Supply Mono test
    </h1>

    <p class="font-supply font-extralight text-xl">
        This is using Supply Mono UltraLight!
    </p>
    <p class="font-supply font-regular text-xl">
        This is using Supply Mono
    </p>
    <p class="text-2xl font-supply font-bold tracking-wide">
        Supply Mono Bold Test — Should look mono & wide
    </p>


    <div class="flex justify-center mb-10">
        <a href="/admin">
            <button class="bg-black hover:bg-gray-800 text-white px-6 py-3 border border-black transition-colors uppercase tracking-wider text-sm font-semibold">
                Admin Dashboard
            </button>
        </a>
    </div>

    <form method="GET" class="flex justify-center mb-16">
        <label for="sort" class="font-semibold mr-4 text-lg uppercase">Sort by</label>
        <select
                name="sort"
                id="sort"
                class="border border-gray-400 px-4 py-2 text-lg uppercase bg-transparent focus:outline-none"
                on:change={() => event.target.form.submit()}
        >
            <option value="newest" selected={currentSort === 'newest'}>Newest</option>
            <option value="oldest" selected={currentSort === 'oldest'}>Oldest</option>
            <option value="name" selected={currentSort === 'name'}>Name</option>
            <option value="artist" selected={currentSort === 'artist'}>Artist</option>
        </select>
    </form>

    <ul class="space-y-12">
        {#each albums as album}
            <li class="border border-gray-300 p-6 flex gap-8 hover:shadow-lg transition-all">
                <img
                        src={album.cover_url || "/placeholder.png"}
                        alt={album.name}
                        class="w-40 h-40 object-cover border border-gray-400"
                />

                <div class="flex-1 flex flex-col justify-between">
                    <div>
                        <p class="text-2xl font-supply uppercase tracking-wide mb-2">{album.name}</p>
                        <p class="text-gray-700 mb-4 text-lg">{album.artist}</p>
                    </div>

                    {#if album.description}
                        <div>
                            <button
                                    type="button"
                                    class="text-black text-sm font-semibold hover:underline uppercase tracking-wider mb-2"
                                    on:click={() => expandedDescription[album.id] = !expandedDescription[album.id]}
                            >
                                {expandedDescription[album.id] ? 'Hide' : 'Show'} Description
                            </button>

                            {#if expandedDescription[album.id]}
                                <p class="text-gray-800 text-sm whitespace-pre-wrap break-words leading-relaxed">
                                    {album.description}
                                </p>
                            {/if}
                        </div>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
</div>
