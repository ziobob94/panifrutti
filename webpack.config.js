const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({mode}) => {
    return{
        mode: mode,
        devtool: "source-map",
        devServer: {
            contentBase: path.resolve(__dirname, "public"),
            open: true,
            host: "localhost",
            disableHostCheck: true,
            port: 9000,
            historyApiFallback: true
        },
        entry: path.resolve(__dirname, "src", "index.tsx"),
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "index.js"
        },
        plugins: [new MiniCssExtractPlugin()],
        resolve: {
          extensions: [".js", ".tsx", ".css", ".ts"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: ["ts-loader"]
                },
                {
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                url: false
                            }
                        }
                        ]
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/,/\.svg$/],
                    loader: "url-loader",
                    options: {
                        limit: 8000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
            ]
        }
}};


