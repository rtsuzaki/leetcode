var canVisitAllRooms = function(rooms) {
    let roomsVisited = {};
    let output = false;
    const visit = (roomIndex) => {
        if (!roomsVisited[roomIndex]) {
            roomsVisited[roomIndex] = true;
        } else {
            return;
        }
        if (Object.keys(roomsVisited).length === rooms.length) {
            output = true;
            return;
        }
        
        for (let i = 0; i < rooms[roomIndex].length; i++) {
            visit(rooms[roomIndex][i]);
        }
        
    }
    
    visit(0);
    return output;
};