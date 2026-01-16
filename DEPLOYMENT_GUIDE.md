# Deployment Guide: Hosting Your Todo App on Render.com

## Prerequisites
- A GitHub account with your repository pushed
- A Render.com account (free tier available)

## Step 1: Create a New Web Service on Render

1. Go to [Render.com](https://render.com)
2. Click **"New +"** and select **"Web Service"**
3. Choose **"Deploy an existing repository"**

## Step 2: Connect Your GitHub Repository

1. Click **"Connect account"** to authorize Render to access your GitHub repositories
2. Select your **todo-app** repository from the list
3. Click **"Connect"**

## Step 3: Configure Your Service

Fill in the following details:

| Field | Value |
|-------|-------|
| **Name** | todo-app |
| **Environment** | Node |
| **Region** | Choose the closest region to you |
| **Branch** | main (or your default branch) |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm start` (or if using static files: `npx serve -s dist -l 3000`) |
| **Plan** | Free |

## Step 4: Set Environment Variables (if needed)

If your app requires environment variables, add them in the **"Environment"** section.

## Step 5: Deploy

1. Click **"Create Web Service"**
2. Render will automatically build and deploy your site
3. Your site will be available at `https://your-app-name.onrender.com`

## Step 6: Configure for Static Site (Optional)

If you want to serve your static files directly (recommended for static sites):

1. Go to your service settings
2. Change the **Start Command** to: `npx serve -s dist -l 3000`
3. Or use Render's Static Site option for faster deployment

## Troubleshooting

### Build fails with "npm not found"
- Ensure `package.json` is in the root directory
- Check that Node version is compatible with your dependencies

### Site shows "Cannot GET /"
- Ensure your build command correctly generates files in the `dist/` folder
- Verify the `Build Command` is set to `npm install && npm run build`

### Site takes too long to load
- You may be on the free tier. Render spins down free services after 15 minutes of inactivity
- Upgrade to a paid plan for always-on service

## Additional Resources

- [Render.com Documentation](https://render.com/docs)
- [Vite Build Guide](https://vitejs.dev/guide/build.html)
- [Troubleshooting Guide](https://render.com/docs/troubleshooting)

---

**Note:** Your static site has been successfully built. The distribution files are in the `dist/` folder and ready for deployment.
