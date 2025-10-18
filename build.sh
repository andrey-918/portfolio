#!/bin/bash

# Build script for portfolio project

echo "Building frontend..."
cd frontend
npm install
npm run build
cd ..

echo "Frontend built successfully. Static files in frontend/dist/"

echo "To build backend, run: go build -o bin/portfolio-backend ./backend"
