const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({mode}) => {
    console.log(arguments);
    return{
        mode: mode,
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "public"),
            open: true,
        },
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "index.js"
        },
        plugins: [new MiniCssExtractPlugin()],
        resolve: {
          extensions: [".js", ".tsx", ".css"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx$/,
                    use: ["ts-loader"]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                }
            ]
        }

}};

