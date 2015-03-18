var RandomGenerator = {
	/*
	This method takes the number of rows and columner as input parameter.

	The method returns an array consisting of the utslumpade number from 1 (rows * cols) / 2. Each number represented two
	times and thus corresponds to a pawn.

	In a 4 * 4 matrix can be array eg look like this:
	[1,2,6,8,6,2,5,3,1,3,7,5,8,4,4,7]

	In a 2 * 4 matrix can be array eg look like this:
	[3,4,4,1,2,1,2,3]
	*/

	getPictureArray: function (rows, cols) {

		var
		numberOfImages = rows * cols,
		maxImageNumber = numberOfImages / 2,
		imgPlace = [];

		// Utplacering av bilder i Array
		for (var i = 0; i < numberOfImages; i++)
			imgPlace[i] = 0;

		for (var currentImageNumber = 1; currentImageNumber <= maxImageNumber; currentImageNumber++) {
			var
			imageOneOK = false,
			imageTwoOK = false;

			do {
				if (imageOneOK === false) {
					var randomOne = Math.floor((Math.random() * (rows * cols - 0) + 0));

					if (imgPlace[randomOne] === 0) {
						imgPlace[randomOne] = currentImageNumber;
						imageOneOK = true;
					}
				}

				if (imageTwoOK === false) {
					var randomTwo = Math.floor((Math.random() * (rows * cols - 0) + 0));

					if (imgPlace[randomTwo] === 0) {
						imgPlace[randomTwo] = currentImageNumber;
						imageTwoOK = true;
					}
				}
			}

			while (imageOneOK === false || imageTwoOK === false);
		}

		return imgPlace;

	}
};
