class MyCalendarTwo:

    def __init__(self):
        self.over = []
        self.booked = []

    def book(self, startTime: int, endTime: int) -> bool:
        if not (self.booked):
            self.booked.append([startTime, endTime])
            return True
        for l,r in self.over:
            if startTime<r and endTime>l:
                return False
        for l,r in self.booked:
            if startTime<r and endTime>l:
                self.over.append([max(l,startTime),min(r,endTime)])
        self.booked.append([startTime,endTime])
        return True

        



# Your MyCalendarTwo object will be instantiated and called as such:
# obj = MyCalendarTwo()
# param_1 = obj.book(startTime,endTime)