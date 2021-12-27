package com.example.carfactory.common.utils;

public class CommonUtils {
    public static String getServiceKey(Class<?> clazz) {
        String className = clazz.getSimpleName();
        if (Character.isUpperCase(className.charAt(1))) {
            return className;
        }
        return Character.toLowerCase(className.charAt(0)) + className.substring(1);
    }
}
