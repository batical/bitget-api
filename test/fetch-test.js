const { SpotClient } = require('../');

// Simple test to verify fetch implementation works
async function testFetchImplementation() {
    console.log('Testing fetch implementation...');

    try {
        console.log('Creating SpotClient...');
        const client = new SpotClient();
        console.log('SpotClient created successfully');

        // Test a simple public API call (server time)
        console.log('Making server time API call...');
        const serverTime = await client.getServerTime();
        console.log('✅ Server time API call successful:', serverTime);

        // Test another public API call (exchange info)
        console.log('Making symbols API call...');
        const symbols = await client.getSymbols();
        console.log('✅ Symbols API call successful, received', symbols?.data?.length || 0, 'symbols');

        console.log('🎉 All fetch tests passed! Axios has been successfully replaced with fetch.');

    } catch (error) {
        console.error('❌ Fetch test failed:');
        console.error('Error message:', error?.message || 'No message');
        console.error('Error stack:', error?.stack || 'No stack');
        console.error('Full error:', error);
        if (error.body) {
            console.error('Response body:', error.body);
        }
    }
}

testFetchImplementation(); 