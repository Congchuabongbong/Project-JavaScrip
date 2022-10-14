var wrap = function (toWrap, wrapper) {
    wrapper = wrapper || body.createElement('div');
    toWrap.parentNode.appendChild(wrapper);
    wrapper.appendChild(toWrap);
    return body.appendChild(wrapper);
};
wrap(document.querySelector('.item'));
