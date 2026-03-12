document.addEventListener('DOMContentLoaded', () => {
    // Select all interactive SVG station nodes
    const stationNodes = document.querySelectorAll('.station-node');
    // Select the form input for station location
    const inputLokasiStasiun = document.getElementById('lokasi_stasiun');

    // Optional helper to log SVG coordinates (for future adjustments)
    const svgMap = document.getElementById('map-svg');
    if (svgMap) {
        svgMap.addEventListener('click', function(e) {
            const pt = svgMap.createSVGPoint();
            pt.x = e.clientX;
            pt.y = e.clientY;
            const svgP = pt.matrixTransform(svgMap.getScreenCTM().inverse());
            console.log(`Clicked SVG coords: x=${Math.round(svgP.x)}, y=${Math.round(svgP.y)}`);
        });
    }

    // Add click event listener to each node
    stationNodes.forEach(node => {
        node.addEventListener('click', function(e) {
            e.stopPropagation(); // prevent logging SVG coords if clicked on a node

            // 1. Remove active class from any currently selected station
            stationNodes.forEach(n => {
                n.classList.remove('active');
            });

            // 2. Add active class to the clicked station
            this.classList.add('active');

            // 3. Extract the station name from the data attribute
            const stationName = this.getAttribute('data-station');

            // 4. Set the value of the readonly input
            if (inputLokasiStasiun) {
                inputLokasiStasiun.value = stationName;

                // Add a small animation/feedback to the input when it updates
                inputLokasiStasiun.style.transition = 'all 0.3s';
                inputLokasiStasiun.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    inputLokasiStasiun.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
});
