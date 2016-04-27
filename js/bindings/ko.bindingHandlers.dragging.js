ko.bindingHandlers.draggable = {
	init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var data = ko.unwrap(valueAccessor());
		element.setAttribute('draggable', true);
		element.addEventListener('dragstart', function (ev) {
			ko.bindingHandlers.draggable.current = data;
		}, false);
        // This will be called when the binding is first applied to an element
        // Set up any initial state, event handlers, etc. here
    },
    update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
        // This will be called once when the binding is first applied to an element,
        // and again whenever any observables/computeds that are accessed change
        // Update the DOM element based on the supplied values here.
    }
};

ko.bindingHandlers.dropzone = {
	init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		var onDropFunction = ko.unwrap(valueAccessor());
		element.addEventListener('dragover', function (ev) {
			ev.preventDefault();
			return false;
		}, false);
		if (typeof (onDropFunction) === 'function') {
			element.addEventListener('drop', function (ev) {
				var data = ko.bindingHandlers.draggable.current.data;
				var onMove = ko.bindingHandlers.draggable.current.onMove;
				if (typeof (onMove) === 'function') {
					ko.bindingHandlers.draggable.current.onMove(data)
				}
				onDropFunction(data);
			}, false);
		}
		// This will be called when the binding is first applied to an element
		// Set up any initial state, event handlers, etc. here
	},
	update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
		// This will be called once when the binding is first applied to an element,
		// and again whenever any observables/computeds that are accessed change
		// Update the DOM element based on the supplied values here.
	}
};