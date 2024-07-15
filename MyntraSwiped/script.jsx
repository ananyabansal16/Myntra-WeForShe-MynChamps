import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductDetails = () => {
    const [wishlist, setWishlist] = useState(false);
    const [cart, setCart] = useState(false);

    const handleWishlist = () => {
        setWishlist(!wishlist);
    };

    const handleAddToCart = () => {
        setCart(!cart);
    };

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <View style={styles.headerRight}>
            <TouchableOpacity style={styles.notificationIcon}>
                <Text style={styles.notificationText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartIcon} onPress={handleWishlist}>
                <Text style={styles.heartIconText}>♥</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileIcon}>
                <Text style={styles.profileIconText}>👤</Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.imageContainer}>
            <Image
            source={require('./assets/product-image.jpg')} // Replace with actual image source
            style={styles.productImage}
            />
        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.productName}>Bonkers Corner</Text>
            <Text style={styles.productDescription}>
            Black Typographic Printed Round Neck Oversized T-shirt
            </Text>
            <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.wishlistButton} onPress={handleWishlist}>
                <Text style={styles.buttonText}>
                {wishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
                <Text style={styles.buttonText}>
                {cart ? 'Added to Cart' : 'Add to Cart'}
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.swipeButtons}>
            <TouchableOpacity style={styles.leftSwipeButton}>
                <Text style={styles.swipeButtonText}>Left Swipe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightSwipeButton}>
                <Text style={styles.swipeButtonText}>Right Swipe</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.navigationButtons}>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>M</Text>
                <Text style={styles.navButtonLabel}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>⚡</Text>
                <Text style={styles.navButtonLabel}>New</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>🏢</Text>
                <Text style={styles.navButtonLabel}>Stores</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>↗</Text>
                <Text style={styles.navButtonLabel}>TrendNxt</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton}>
                <Text style={styles.navButtonText}>🛍️</Text>
                <Text style={styles.navButtonLabel}>Bag</Text>
                <View style={styles.badge}>
                <Text style={styles.badgeText}>5</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    backButton: {
        padding: 8,
    },
    backButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationIcon: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 16,
    },
    notificationText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    heartIcon: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 16,
    },
    heartIconText: {
        fontSize: 20,
        color: 'red',
    },
    profileIcon: {
        padding: 8,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
    },
    profileIconText: {
        fontSize: 20,
        color: '#333',
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    productImage: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    detailsContainer: {
        padding: 16,
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productDescription: {
        fontSize: 16,
        marginBottom: 16,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    wishlistButton: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 8,
    },
    addToCartButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        flex: 1,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    footer: {
        padding: 16,
    },
    swipeButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    leftSwipeButton: {
        backgroundColor: '#f0f0f0',
        padding: 12,
        borderRadius: 8,
        flex: 1,
        marginRight: 8,
    },
    rightSwipeButton: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        flex: 1,
    },
    swipeButtonText: {
        color: '#fff',
        textAlign: 'center',
    },
    navigationButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navButton: {
        alignItems: 'center',
    },
    navButtonText: {
        fontSize: 24,
        color: '#333',
    },
    navButtonLabel: {
        fontSize: 12,
        color: '#333',
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        padding: 4,
        borderRadius: 50,
    },
    badgeText: {
        fontSize: 10,
        color: '#fff',
    },
    });

    export default ProductDetails;