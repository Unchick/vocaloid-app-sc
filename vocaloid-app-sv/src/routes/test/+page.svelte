<svelte:head>
    <style>
        @font-face {
            font-family: 'Supply Mono';
            src: url('/fonts/Supply-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }

        .test-supply {
            font-family: 'Supply Mono', monospace;
            font-size: 24px;
        }
    </style>
</svelte:head>

<p class="test-supply">This should be rendered in Supply Mono.</p>
