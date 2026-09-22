function page_builder (page) {
    const body = document.getElementById('body');
    body.innerHTML = '';
    body.innerHTML = page();
}

export default page_builder;