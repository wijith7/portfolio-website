# Guide: Extracting Images from Medium Articles

## Quick Method (Recommended)

1. **Open each Medium article in your browser**
2. **Find the featured/hero image** at the top of the article
3. **Right-click on the image** → Select "Save image as..." or "Copy image address"
4. **Save the image** to your `public/` folder with the appropriate name (see naming below)
5. **Update the code** - I'll help you with this!

## Naming Convention for Images

Based on your articles, here are suggested names:

1. **"You Can't See the Danger Inside a Tailings Dam"** 
   - Save as: `medium-tailings-dam-danger.png` (or .jpg)
   - Update in code to: `/medium-tailings-dam-danger.png`

2. **"What SCADA Systems Really Do"**
   - Save as: `medium-scada-systems.png` (or .jpg)
   - Update in code to: `/medium-scada-systems.png`

3. **"There's More Than Just Water Dams"**
   - Save as: `medium-tailing-dams.png` (or .jpg)
   - Update in code to: `/medium-tailing-dams.png`

4. **"GNSS Technology - Tailings Dam Monitoring"**
   - Save as: `medium-gnss-monitoring.png` (or .jpg)
   - Update in code to: `/medium-gnss-monitoring.png`

## Alternative: Get Image URL from Browser DevTools

1. Open the Medium article
2. Press `F12` to open Developer Tools
3. Go to the **Network** tab
4. Filter by **Img** (Images)
5. Refresh the page
6. Look for the large featured image (usually one of the first loaded)
7. Right-click on it → Copy → Copy image address
8. Open the URL in a new tab and save the image

## After Saving Images

Once you've saved all the images to the `public/` folder, I can update the code to use them automatically!


