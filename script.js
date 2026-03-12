document.addEventListener("DOMContentLoaded", () => {
    const stationNodes = document.querySelectorAll(".station-node");
    const inputLokasi = document.getElementById("lokasi_stasiun");

    stationNodes.forEach(node => {
        node.addEventListener("click", function() {
            // Get the station name from data attribute
            const stationName = this.getAttribute("data-station");

            // 1. Remove 'active' class from all other nodes
            stationNodes.forEach(n => {
                n.classList.remove("active");
            });

            // 2. Add 'active' class to the clicked node
            this.classList.add("active");

            // 3. Set the input value to the station name
            inputLokasi.value = stationName;
        });
    });
});
