// Helper script to extract Medium article featured image URLs
// Run with: node get-medium-images.js

const articles = [
    {
        title: "You Can't See the Danger Inside a Tailings Dam",
        url: "https://medium.com/@wijithpathiranage/you-cant-see-the-danger-inside-a-tailings-dam-engineers-use-this-to-find-it-9092bb53e202",
        filename: "medium-tailings-dam-danger"
    },
    {
        title: "What SCADA Systems Really Do",
        url: "https://medium.com/@wijithpathiranage/behind-the-curtain-of-industry-what-scada-systems-really-do-86ea641899a8",
        filename: "medium-scada-systems"
    },
    {
        title: "There's More Than Just Water Dams",
        url: "https://medium.com/@wijithpathiranage/theres-more-than-just-water-dams-a-look-at-tailing-dams-2a5c4efba985",
        filename: "medium-tailing-dams"
    },
    {
        title: "GNSS Technology - Tailings Dam Monitoring",
        url: "https://medium.com/@wijithpathiranage/how-gnss-technology-is-revolutionizing-tailings-dam-monitoring-9916aea8f804",
        filename: "medium-gnss-monitoring"
    }
];

console.log("Medium Article Image Extraction Guide\n");
console.log("=====================================\n");
console.log("To get the featured images from your Medium articles:\n");
console.log("1. Open each article URL in your browser");
console.log("2. Find the featured image at the top of the article");
console.log("3. Right-click the image → 'Save image as...'");
console.log("4. Save to the 'public' folder with the filename below\n");

articles.forEach((article, index) => {
    console.log(`${index + 1}. ${article.title}`);
    console.log(`   URL: ${article.url}`);
    console.log(`   Save as: ${article.filename}.png (or .jpg)`);
    console.log(`   Location: public/${article.filename}.png\n`);
});

console.log("After saving all images, the code will be updated to use them!");


