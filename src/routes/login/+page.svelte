<script lang="ts">
    let username = '';
    let password = '';
</script>

<div class="max-w-sm mx-auto p-6 bg-white shadow rounded">
    <h1 class="text-3xl font-bold mb-6 text-gray-800">Admin Login</h1>

    <form method="POST" class="space-y-4">
        <div>
            <label for="username" class="block text-gray-700 font-medium">Username</label>
            <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    bind:value={username}
                    required
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div>
            <label for="password" class="block text-gray-700 font-medium">Password</label>
            <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    bind:value={password}
                    required
                    class="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
            />
        </div>

        <div class="flex justify-between items-center mt-6">
            <a href="/" class="text-blue-600 hover:underline">Back to Home</a>
            <button
                    type="submit"
                    class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Login
            </button>
        </div>
    </form>
</div>

