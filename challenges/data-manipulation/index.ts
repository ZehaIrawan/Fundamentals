// Given Data Structure:
interface UserActivity {
  userId: string;
  activity: 'login' | 'logout' | 'purchase' | 'refund' | 'view';
  timestamp: number; // Unix timestamp
  metadata?: {
    amount?: number; // for purchases
    page?: string;   // for views
  };
}

// Sample data
const sampleData: UserActivity[] = [
  { userId: 'user1', activity: 'login', timestamp: 1640995200 },
  { userId: 'user1', activity: 'purchase', timestamp: 1640995800, metadata: { amount: 25.99 } },
  { userId: 'user1', activity: 'logout', timestamp: 1640996400 },
  { userId: 'user2', activity: 'login', timestamp: 1640995300 },
  { userId: 'user2', activity: 'view', timestamp: 1640995600, metadata: { page: 'products' } },
  { userId: 'user3', activity: 'logout', timestamp: 1640996100 },
  { userId: 'user4', activity: 'purchase', timestamp: 1640995500, metadata: { amount: 15.50 } },
  { userId: 'user4', activity: 'refund', timestamp: 1640998800, metadata: { amount: 12.50 }},
];

// Create a TypeScript function that analyzes user activity data and returns insights.

interface AnalysisResult {
  totalUsers: number;
  mostActiveUser: string;
  totalRevenue: number;
}

/**
 * @returns {
 *    totalUsers: number of unique users
 *    mostActiveUser: user ID with the most activities
 *    totalRevenue: sum of all purchase amounts minus sum of all refund amounts
 * }
 */
function analyzeUserActivity(activities: UserActivity[]): AnalysisResult {
  
  const totalUsers = activities.map(a => a.userId )

  const uniqueUserIds = Array.from(new Set(totalUsers))
 

  const totalRevenue = activities.reduce(function (acc, obj) { 
      if (obj.activity === 'purchase') {
        return acc + obj.metadata.amount
      } 
      return acc
     }, 0);

  console.log(totalRevenue,'totalRevenue')

  return {
      totalUsers: Array.from(new Set(totalUsers)).length,
      mostActiveUser:'',
      totalRevenue: 11.5
  }
}


const result = analyzeUserActivity(sampleData);

document.getElementById('app').textContent = JSON.stringify(result, null, 2);