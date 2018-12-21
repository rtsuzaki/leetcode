var canCompleteCircuit = function(gas, cost) {
    let output = -1;
    const checkStation = (index) => {
        let start = index;
        let tank = gas[index];
        let current = index;
        while (true) {
            tank -= cost[current];
            if (tank < 0) {
                return;
            } else {
                current++;
                if (current > gas.length -1) {
                    current = 0;
                }
                if (current === start) {
                    output = start;
                    return;
                }
                tank += gas[current];
            }
        }
    }
    for (let i = 0; i < gas.length; i++) {
        checkStation(i);
    }   
    return output;
};