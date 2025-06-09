const ComingSoon = require("../models/comingsoon");
const { sendComingSoonEmail } = require("../utils/mailTemplates");

exports.notify = async (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            status: 'fail',
            message: 'Email is required.'
        });
    }
    // Here you would typically validate the email format and check if it's already subscribed
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        return res.status(400).json({
            status: 'fail',
            message: 'Invalid email format.'
        });
    }
    const alreadySubscribed = await ComingSoon.findOne({ email });
    console.log(`Checking if ${email} is already subscribed...`);
    
    if (alreadySubscribed) {
        return res.status(400).json({
            status: 'fail',
            message: 'This email is already subscribed.'
        });
    }
    // Save the email to the database
    const newSubscription = await ComingSoon.create({ email });
    if (!newSubscription) {
        return res.status(500).json({
            status: 'error',
            message: 'Failed to subscribe. Please try again later.'
        });
    }
    // Send a notification email
    await sendComingSoonEmail(email);
    res.status(200).json({
        status: 'success',
        message: 'Notification sent successfully.'
    });
}

exports.getNotifications = (req, res, next) => {
    // This is a placeholder for fetching notifications
    // In a real application, you would fetch from a database or service
    const notifications = [
        { id: 1, title: 'Welcome', message: 'Welcome to our service!', type: 'info' },
        { id: 2, title: 'Update', message: 'Your profile has been updated.', type: 'success' }
    ];

    res.status(200).json({
        status: 'success',
        data: {
            notifications
        }
    });
}