import {BufferWS} from "../src/BufferWS";

describe('DECODING and ENCODING test', () => {
    it('encoding', function () {
        let buffer = new BufferWS()
            .writeInt(39)
            .writeDouble(4.5)
            .writeString("Yooo")
            .writeShort(5)
            .writeBool(false);
    }),
    it('decoding', function () {
        let buffer = new BufferWS()
          .writeInt(64)
          .writeDouble(3.6)
          .writeString("&&a-!§çàè!§è(àç!à§(!è§(!çàè§ç!(èà(§àè§!(ç!èçà(!èàç(!çàè!(èçà!(§ç(!'à§(!à('§!çà'§à!ç'§(!('!§ç§(!§'(à!§(!'(!àç§'(à!§(!çà()za")
          .writeShort(9)
          .writeBool(true)
          .writeBool(true)
          .writeBool(true)
          .writeBool(true)
          .writeString("yopyop")
          .flip();

        console.log(buffer.readInt());
        console.log(buffer.readDouble());
        console.log(buffer.readString());
        console.log(buffer.readShort());
        console.log(buffer.readBool());
        console.log(buffer.readBool());
        console.log(buffer.readBool());
        console.log(buffer.readBool());
        console.log(buffer.readString());
    })
});
