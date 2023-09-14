const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

export function daysSince(dateString) {
    try {
        const dateGiven = new Date(dateString);
        if (isInvalidDate(dateGiven)) {
            throw new Error('Invalid date provided');
        }
        
        return calculateDaysDifference(dateGiven, new Date());
    } catch (error) {
        console.error('Error in daysSince:', error.message);
        return null;
    }
}

function isInvalidDate(date) {
    return isNaN(date);
}

function calculateDaysDifference(date1, date2) {
    const differenceInMilliseconds = date2 - date1;
    return Math.floor(differenceInMilliseconds / MILLISECONDS_IN_A_DAY);
}