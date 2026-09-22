function page_builder (container, component) {
    container.innerHTML = '';
    container.innerHTML = component();
}

export default page_builder;