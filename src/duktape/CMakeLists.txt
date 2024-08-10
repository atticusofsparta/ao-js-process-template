cmake_minimum_required(VERSION 3.0)
project(DuktapeProject)

# Set the C standard
set(CMAKE_C_STANDARD 99)

# Set the source files
set(SOURCE_FILES
    src/duktape.c
)

# Include directories
include_directories(libs)

# Add the static library
add_library(duktape_static STATIC ${SOURCE_FILES})
