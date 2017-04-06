package com.weex.mix.util;

/**
 * Created by codemanwang on 2017/3/30.
 */

public class AssertUtil {

    public static<T extends Exception> void throwIfNull(Object obj, T e) throws T{
        if (obj == null){
            throw e;
        }
    }
}
