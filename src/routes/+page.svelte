<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev" class="link link-primary">kit.svelte.dev</a> to read the documentation
</p>

<p class="my-5">以下是aardio与svelteKit交互演示</p>
<!-- svelte-ignore missing-declaration -->
<button
	class="btn btn-primary"
	on:click={async () => {
		try {
			await aardio_msgbox('aardio函数调用成功');
		} catch (error) {
			console.log('请在aardio窗口内运行网页');
		}
	}}>调用aardio函数</button
>
