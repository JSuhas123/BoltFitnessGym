// Quick Data Checker - Run this in browser console to see nutrition data
// Copy and paste this entire code block into your browser's console (F12)

(function() {
  console.log('🔍 Checking for Bolt Fitness nutrition data...\n');
  
  try {
    // Get the stored data
    const rawData = localStorage.getItem('bfn_admin_data');
    
    if (!rawData || rawData === '[]') {
      console.log('❌ No nutrition data found.');
      console.log('💡 To generate test data:');
      console.log('   1. Go to: http://localhost:5173/nutrition');
      console.log('   2. Fill out and submit the form');
      console.log('   3. Run this script again');
      return;
    }
    
    const data = JSON.parse(rawData);
    console.log(`✅ Found ${data.length} nutrition submission(s)!\n`);
    
    // Display each submission
    data.forEach((submission, index) => {
      console.log(`📋 Submission #${index + 1}`);
      console.log(`   ID: ${submission.id}`);
      console.log(`   Date: ${new Date(submission.timestamp).toLocaleString()}`);
      console.log(`   Name: ${submission.data.name || 'Not provided'}`);
      console.log(`   Email: ${submission.data.email || 'Not provided'}`);
      console.log(`   Goal: ${submission.data.fitnessGoal || 'Not provided'}`);
      console.log(`   Age: ${submission.data.age || 'Not provided'}`);
      console.log('   ---');
    });
    
    console.log('\n📊 Quick Stats:');
    const goals = data.map(d => d.data.fitnessGoal).filter(Boolean);
    const goalCounts = goals.reduce((acc, goal) => {
      acc[goal] = (acc[goal] || 0) + 1;
      return acc;
    }, {});
    console.table(goalCounts);
    
    console.log('\n💾 To export this data:');
    console.log('   1. Go to: http://localhost:5173/admin-nutrition-data-management');
    console.log('   2. Password: boltfitness2025');
    console.log('   3. Click "Download CSV" or "Download Excel"');
    
  } catch (error) {
    console.error('❌ Error checking data:', error);
  }
})();

console.log('\n🔗 Quick Links:');
console.log('Nutrition Form: http://localhost:5173/nutrition');
console.log('Admin Panel: http://localhost:5173/admin-nutrition-data-management');
console.log('Admin Password: boltfitness2025');
